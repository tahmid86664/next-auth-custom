import React, { useState } from "react";
import { getProviders, signIn, getSession } from "next-auth/react";

const SignIn = ({ providers }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithCred = (e) => {
    e.preventDefault();
    // console.log({ email, password });
    const options = { email, password };
    const res = signIn("credentials", options);
    console.log(res);
    // reset form
  };

  return (
    <>
      <form onSubmit={signInWithCred}>
        <input
          type="email"
          placeholder="your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>

      {Object.values(providers).map(
        (provider) =>
          provider.name !== "Credentials" && (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          )
      )}
    </>
  );
};

export default SignIn;

export const getServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
