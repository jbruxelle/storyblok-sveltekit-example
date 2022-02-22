import { dev } from '$app/env';
import { writable } from 'svelte/store';

type TStoryblokAPIVersion = 'draft' | 'published';

const defaultVersion: TStoryblokAPIVersion = dev ? 'draft' : 'published';
export const version = writable<TStoryblokAPIVersion>(defaultVersion);
