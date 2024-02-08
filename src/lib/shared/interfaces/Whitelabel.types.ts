export type GetOriginProps = {
  id: number;
  nome: string;
  link: string;
};

export type GetWhitelabelProps = {
  images: {
    favIcon: string;
    loginHeader: string;
    defaultLogo: string;
    registerLogo: string;
    analysisLogo: string;
  };
  links: {
    url: string;
  };
  colors: {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    menuGradientColor1: string;
    menuGradientColor2: string;
    menuGradientColor3: string;
    menuGradientColor4: string;
    menuGradientColor5: string;
  };
};

export type WhitelabelProps = {
  id: number;
  link: string;
  isPartner?: boolean;
  cor: string;
  cor_antiga: string;
  cor_texto: string;
  nome: string;
  tipo: string;
  favicon: string;
  logo_primary: string;
  logo_secondary: string;
  logo_alternative: string;
  secondaryColor: string;
  menu_gradiente: {
    cor1: string;
  };
};

export type BootWhitelabelProps = {
  originRequestData: GetOriginProps;
  whitelabelRequestData: GetWhitelabelProps;
};

export type BootWhitelabel = BootWhitelabelProps | false;
