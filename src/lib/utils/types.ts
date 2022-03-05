export type TBlok = {
	component?: string;
	[key: string]: any;
};

export type TLink =
	| {
			cached_url?: string;
			linktype?: string;
			[k: string]: any;
	  }
	| {
			id?: string;
			cached_url?: string;
			linktype?: 'story';
			[k: string]: any;
	  }
	| {
			url?: string;
			cached_url?: string;
			linktype?: 'asset' | 'url';
			[k: string]: any;
	  }
	| {
			email?: string;
			linktype?: 'email';
			[k: string]: any;
	  };
