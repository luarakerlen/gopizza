import React from 'react';
import { Button, Input } from '../../components';
import { Container } from './styles';

export function SignIn() {
	return (
		<Container>
			<Input
				placeholder='E-mail'
				type='secondary'
				autoCorrect={false}
				autoCapitalize='none'
			/>
			<Input placeholder='Senha' type='secondary' secureTextEntry />
			<Button title='Entrar' type='secondary' />
		</Container>
	);
}
