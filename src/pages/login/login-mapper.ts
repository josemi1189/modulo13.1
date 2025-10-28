import * as apiModel from './api';
import * as viewModel from './login-model';

export const mapCredentialFromVmToApi = (credential: viewModel.CredentialModel): apiModel.Credentials => (
   {
      user: credential.user,
      password: credential.password,
   }

);