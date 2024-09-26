import { signal } from '@preact/signals';

const isSecretPageEnabled = signal<boolean>(false);

export { isSecretPageEnabled };
