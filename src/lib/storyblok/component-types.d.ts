export interface ButtonBlok {
	type: 'primary' | 'secondary' | 'ghost';
	text: string;
	link?:
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
	size: 'small' | 'medium' | 'large';
	_uid: string;
	component: 'Button';
	[k: string]: any;
}

export interface FooterBlok {
	_uid: string;
	component: 'Footer';
	[k: string]: any;
}

export interface GridBlok {
	columns?: any[];
	_uid: string;
	component: 'Grid';
	[k: string]: any;
}

export interface HeaderBlok {
	logotype: LogotypeBlok[];
	links?: LinkBlok[];
	cta?: ButtonBlok[];
	_uid: string;
	component: 'Header';
	[k: string]: any;
}

export interface HeroBlok {
	title?: string;
	cta?: ButtonBlok[];
	description?: string;
	image?: {
		alt?: string;
		copyright?: string;
		id: number;
		filename: string;
		name: string;
		title?: string;
	};
	_uid: string;
	component: 'Hero';
	[k: string]: any;
}

export interface LayoutBlok {
	header: HeaderBlok[];
	footer: FooterBlok[];
	_uid: string;
	component: 'Layout';
	[k: string]: any;
}

export interface LinkBlok {
	link:
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
	text?: string;
	_uid: string;
	component: 'Link';
	[k: string]: any;
}

export interface LogotypeBlok {
	image: {
		alt?: string;
		copyright?: string;
		id: number;
		filename: string;
		name: string;
		title?: string;
	};
	link?:
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
	_uid: string;
	component: 'Logotype';
	[k: string]: any;
}

export interface PageBlok {
	seo: {
		_uid?: string;
		title?: string;
		plugin?: string;
		og_image?: string;
		og_title?: string;
		description?: string;
		twitter_image?: string;
		twitter_title?: string;
		og_description?: string;
		twitter_description?: string;
		[k: string]: any;
	};
	body?: any[];
	_uid: string;
	component: 'Page';
	[k: string]: any;
}

export interface ParagraphBlok {
	text?: string;
	_uid: string;
	component: 'Paragraph';
	[k: string]: any;
}

export interface ServiceBlok {
	_uid: string;
	component: 'Service';
	[k: string]: any;
}

export interface ServicesBlok {
	services?: ServiceBlok[];
	titre?: string;
	_uid: string;
	component: 'Services';
	[k: string]: any;
}
