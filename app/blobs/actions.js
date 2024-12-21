'use server';

import { getStore } from '@netlify/blobs';
import { uploadDisabled } from 'utils';

function store() {
    const siteID = process.env.NETLIFY_SITE_ID;
    const token = process.env.NETLIFY_AUTH_TOKEN;

    if (!siteID || !token) {
        throw new Error(
            'Netlify Blobs configuration is missing. Ensure NETLIFY_SITE_ID and NETLIFY_AUTH_TOKEN are set in the environment variables.'
        );
    }

    return getStore({
        name: 'shapes',
        consistency: 'strong',
        siteID,
        token,
    });
}

// Always sanitize data in real sites!
export async function uploadShapeAction({ parameters }) {
    if (uploadDisabled) {
        throw new Error('Sorry, uploads are disabled');
    }

    const key = parameters.name;

    try {
        await store().setJSON(key, parameters);
        console.log('Stored shape with parameters:', parameters, 'to key:', key);
    } catch (error) {
        console.error('Failed to upload shape:', error.message);
        throw new Error('Error storing shape. Please try again later.');
    }
}

export async function listShapesAction() {
    try {
        const data = await store().list();
        const keys = data.blobs.map(({ key }) => key);
        console.log('Listed shapes successfully:', keys);
        return keys;
    } catch (error) {
        console.error('Failed to list shapes:', error.message);
        throw new Error('Error listing shapes. Please try again later.');
    }
}

export async function getShapeAction({ keyName }) {
    try {
        const data = await store().get(keyName, { type: 'json' });
        console.log('Retrieved shape data successfully:', data);
        return data;
    } catch (error) {
        console.error(`Failed to retrieve shape with key "${keyName}":`, error.message);
        throw new Error(`Error retrieving shape with key: ${keyName}`);
    }
}
