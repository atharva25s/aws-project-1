import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Authenticator, Button, useAuthenticator, useTheme, View, Image, Text, Heading } from '@aws-amplify/ui-react';
import { generateClient } from '@aws-amplify/api';
import { uploadData,  getUrl } from '@aws-amplify/storage'; 
import {createBook} from '../graphql/mutations';

import config from '../aws-exports.js';
import { Amplify } from 'aws-amplify';

Amplify.configure(config);
// Initialize API client
const client = generateClient();

const Admin = () => {
    const [image, setImage] = useState(null);
    const [bookDetails, setBookDetails] = useState({
        title: "", 
        description: "", 
        image: "", 
        author: "", 
        price: "", 
        featured: false 
    });

    const { user, signOut } = useAuthenticator((context) => [context.user])
    console.log(user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!bookDetails.title || !bookDetails.price) return;
        try {
            await client.graphql({ query: createBook, variables: { input: bookDetails } });
            setBookDetails({ title: "", description: "", image: "", author: "", price: "", featured: false });
            setImage(null);
        } catch (err) {
            console.log('Error creating book:', err);
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const key = `images/${uuidv4()}.${extension}`;

        try {
            const result = await uploadData({ key, data: file, options: { accessLevel: 'public', contentType: file.type } });

            const uploadedImage = await getUrl({ key, options: { accessLevel: 'public' } });

            setImage(uploadedImage);
            setBookDetails((prevDetails) => ({ ...prevDetails, image: uploadedImage }));
            console.log('Upload succeeded:', result);
            return result;
        } catch (err) {
            console.log('Error uploading image:', err);
            throw err;
        }
    };

    const components = {
        Header() {
          const { tokens } = useTheme();
      
          return (
            <View textAlign="center" padding={tokens.space.large}>
              <Image
                alt="Amplify logo"
                src="https://docs.amplify.aws/assets/logo-dark.svg"
              />
            </View>
          );
        },
      
        Footer() {
          const { tokens } = useTheme();
      
          return (
            <View textAlign="center" padding={tokens.space.large}>
              <Text color={tokens.colors.neutral[80]}>
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
                color={"black"}
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}
              >
                Sign in to your account
              </Heading>
            );
          },
          Footer() {
            const { toForgotPassword } = useAuthenticator();
      
            return (
              <View textAlign="center">
                <Button
                  fontWeight="normal"
                  onClick={toForgotPassword}
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
        SetupTotp: {
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
        ForgotPassword: {
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
        signIn: {
          username: {
            placeholder: 'Enter your email',
          },
        },
        signUp: {
          password: {
            label: 'Password:',
            placeholder: 'Enter your Password:',
            isRequired: false,
            order: 2,
          },
          confirm_password: {
            label: 'Confirm Password:',
            order: 1,
          },
        },
        forceNewPassword: {
          password: {
            placeholder: 'Enter your Password:',
          },
        },
        forgotPassword: {
          username: {
            placeholder: 'Enter your email:',
          },
        },
        confirmResetPassword: {
          confirmation_code: {
            placeholder: 'Enter your Confirmation Code:',
            label: 'New Label',
            isRequired: false,
          },
          confirm_password: {
            placeholder: 'Enter your Password Please:',
          },
        },
        setupTotp: {
          QR: {
            totpIssuer: 'test issuer',
            totpUsername: 'amplify_qr_test_user',
          },
          confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
          },
        },
        confirmSignIn: {
          confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
          },
        },
      };
    return (
        <section className= "admin-wrapper">
            <Authenticator formFields={formFields} components={components}>
                {() => (
                    <section>
                        <header className="form-header">
                            <h3>Add New Book</h3>
                            <Button onClick={signOut}>Sign Out</Button>
                        </header>
                        <form className="form-wrapper" onSubmit={handleSubmit}>
                            <div className="form-image">
                                {image ? (
                                    <img className="image-preview" src={image} alt="Book Cover" />
                                ) : (
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                )}
                            </div>
                            <div className="form-fields">
                                <div className="title-form">
                                    <p><label htmlFor="title">Title</label></p>
                                    <p>
                                        <input
                                            name="title"
                                            type="text"
                                            placeholder="Enter book title"
                                            value={bookDetails.title}
                                            onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })}
                                            required
                                        />
                                    </p>
                                </div>
                                <div className="description-form">
                                    <p><label htmlFor="description">Description</label></p>
                                    <p>
                                        <textarea
                                            name="description"
                                            rows="8"
                                            placeholder="Enter book description"
                                            value={bookDetails.description}
                                            onChange={(e) => setBookDetails({ ...bookDetails, description: e.target.value })}
                                            required
                                        />
                                    </p>
                                </div>
                                <div className="author-form">
                                    <p><label htmlFor="author">Author</label></p>
                                    <p>
                                        <input
                                            name="author"
                                            type="text"
                                            placeholder="Enter author's name"
                                            value={bookDetails.author}
                                            onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })}
                                            required
                                        />
                                    </p>
                                </div>
                                <div className="price-form">
                                    <p><label htmlFor="price">Price ($)</label></p>
                                    <p>
                                        <input
                                            name="price"
                                            type="number"
                                            step="0.01"
                                            placeholder="Enter book price"
                                            value={bookDetails.price}
                                            onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })}
                                            required
                                        />
                                    </p>
                                </div>
                                <div className="featured-form">
                                    <p><label>Featured?</label></p>
                                    <p>
                                        <input
                                            type="checkbox"
                                            className="featured-checkbox"
                                            checked={bookDetails.featured}
                                            onChange={() => setBookDetails({ ...bookDetails, featured: !bookDetails.featured })}
                                        />
                                    </p>
                                </div>
                                <div className="submit-form">
                                    <button className="btn" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </section>
                )}
            </Authenticator>
        </section>
    );
};

export default Admin;
