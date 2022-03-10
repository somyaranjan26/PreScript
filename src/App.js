import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import {
  Authenticator,
  useAuthenticator,
  Image,
  useTheme,
  View,
  Text,
  Heading,
  Button
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {ComingSoonPage} from './components/comingSoonPage'
import Logo from './assets/logo.png'

Amplify.configure(awsconfig)

// const formFields = {
//   signUp: {
//     email: {
//       order:4
//     },
//     name: {
//       order: 1
//     },
//     preferred_username: {
//       order: 2
//     },
//     birthdate: {
//       order: 3
//     },
//     password: {
//       order: 5
//     },
//     confirm_password: {
//       order: 6
//     }
//   },
//  }


const components = {
  Header() {
      const { tokens } = useTheme();

      return (
      <View textAlign="center" padding={tokens.space.large}>
          <Image 
          alt="logo"
          src={Logo}
          />
      </View>
      );
},

Footer() {
const { tokens } = useTheme();

return (
<View textAlign="center" padding={tokens.space.large}>
  <Text color={`${tokens.colors.neutral['80']}`}>
    &copy; All Rights Reserved
  </Text>
</View>
);
},

SignIn: {
Header() {
const { tokens } = useTheme();

return (
  <Heading
    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    level={3}
  >
    Sign in to your account
  </Heading>
);
},
Footer() {
const { toResetPassword } = useAuthenticator();

return (
  <View textAlign="center">
    <Button
      fontWeight="normal"
      onClick={toResetPassword}
      size="small"
      variation="link"
    >
      Reset Password
    </Button>
  </View>
);
},
},

SignUp: {
Header() {
const { tokens } = useTheme();

return (
  <Heading
    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    level={3}
  >
    Create a new account
  </Heading>
);
},
Footer() {
const { toSignIn } = useAuthenticator();

return (
  <View textAlign="center">
    <Button
      fontWeight="normal"
      onClick={toSignIn}
      size="small"
      variation="link"
    >
      Back to Sign In
    </Button>
  </View>
);
},
},
ConfirmSignUp: {
Header() {
const { tokens } = useTheme();
return (
  <Heading
    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    level={3}
  >
    Enter Information:
  </Heading>
);
},
Footer() {
return <Text>Footer Information</Text>;
},
},
ConfirmSignIn: {
Header() {
const { tokens } = useTheme();
return (
  <Heading
    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    level={3}
  >
    Enter Information:
  </Heading>
);
},
Footer() {
return <Text>Footer Information</Text>;
},
},
ResetPassword: {
Header() {
const { tokens } = useTheme();
return (
  <Heading
    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    level={3}
  >
    Enter Information:
  </Heading>
);
},
Footer() {
return <Text>Footer Information</Text>;
},
},
ConfirmResetPassword: {
Header() {
const { tokens } = useTheme();
return (
  <Heading
    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
    level={3}
  >
    Enter Information:
  </Heading>
);
},
Footer() {
return <Text>Footer Information</Text>;
},
},
};

const formFields = {
  signUp: {
    email: {
      order:4
    },
    name: {
      order: 1
    },
    preferred_username: {
      order: 2
    },
    birthdate: {
      order: 3
    },
    password: {
      order: 5
    },
    confirm_password: {
      order: 6
    }
  },
 }



function App() {
  return (
    <div className='m-20'>
      <Authenticator 
        loginMechanisms={['email']} 
        formFields={formFields}
        components={components}
      >
      {({ signOut, user }) => (
        <ComingSoonPage user={user} signOut={signOut} />
      )}
      </Authenticator>
    </div>
    
  );
}

export default App; 
