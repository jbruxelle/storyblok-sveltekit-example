import { browser } from '$app/env';
import * as Types from "$lib/graphql/_kitql/graphqlTypes";
import { defaultStoreValue, RequestStatus, type RequestParameters, type RequestResult } from '@kitql/client';
import { writable } from 'svelte/store';
import { kitQLClient } from '../kitQLClient';
 
/**
 * Svetle Store with the latest `LayoutQuery` Operation
 */
export const LayoutQueryStore = writable<RequestResult<Types.LayoutQuery, Types.LayoutQueryVariables>>(defaultStoreValue);

/**
 * For SSR, you need to provide 'fetch' from the load function
 * For the client you can avoid to provide the 'fetch' native function
 * @param params
 * @returns the latest LayoutQuery operation and fill the LayoutQueryStore
 */
// prettier-ignore
export async function LayoutQuery(
  params?: RequestParameters<Types.LayoutQueryVariables>
): Promise<RequestResult<Types.LayoutQuery, Types.LayoutQueryVariables>> {

  let storedVariables = null;
	LayoutQueryStore.update((c) => {
		storedVariables = c.variables;
		return { ...c, status: RequestStatus.LOADING };
	});
	let { fetch, variables, settings } = params ?? {};
  let { cache } = settings ?? {};

  if (variables === undefined) {
    variables = storedVariables;
  }
	const res = await kitQLClient.request<Types.LayoutQuery, Types.LayoutQueryVariables>({
		document: Types.LayoutDocument,
		variables,
		skFetch: fetch,
		cacheKey: "LayoutQuery",
		cache,
		browser
	});
	const result = { status: RequestStatus.DONE, ...res, variables };
	LayoutQueryStore.set(result);
	return result;
}
