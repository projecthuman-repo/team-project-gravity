import { RNKeycloak } from '@react-keycloak/web';

// Setup Keycloak instance as needed
// Pass initialization options as required
const keycloak = new RNKeycloak({
  url: 'http://keycloak-server/auth',
  realm: 'kc-realm',
  clientId: 'web',
});

export default keycloak;