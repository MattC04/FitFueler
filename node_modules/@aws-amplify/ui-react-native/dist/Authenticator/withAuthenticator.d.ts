import React from 'react';
import { WithAuthenticatorOptions } from './types';
export default function withAuthenticator<Props = {}>(Component: React.ComponentType<Props>, options?: WithAuthenticatorOptions): (props: Props) => JSX.Element;
