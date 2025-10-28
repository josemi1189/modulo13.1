export interface CredentialModel {
   user: string;
   password: string;
}

export const createEmptyCredential = (): CredentialModel => ({
   user: "",
   password: "",
});

