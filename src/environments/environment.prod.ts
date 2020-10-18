import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'AssetManagementPlatform',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44346',
    redirectUri: baseUrl,
    clientId: 'AssetManagementPlatform_App',
    responseType: 'code',
    scope: 'offline_access AssetManagementPlatform',
  },
  apis: {
    default: {
      url: 'https://localhost:44373',
      rootNamespace: 'SY.Airport.AssetManagementPlatform',
    },
  },
} as Config.Environment;
