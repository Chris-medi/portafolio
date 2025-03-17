export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface Skills {
  programing_languages: string[];
  frameworks: Record<string, string[]>;
  databases: Record<string, string[]>;
  tools: Record<string, string[]>;
}

export interface Projects {
  title: string;
  link: string;
  url_image: string;
}
