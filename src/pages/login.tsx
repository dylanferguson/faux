import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): boolean => {
    event.preventDefault();
    if (
      !event.currentTarget.userId.value &&
      !event.currentTarget.password.value
    ) {
      return false;
    }

    router.push("/");
    return false;
  };

  return (
    <div className="min-h-screen bg-white bg-opacity-25 flex flex-col items-center justify-center pt-10 pb-20">
      {/* <h1 className="logo mb-8 text-4xl">Faux!</h1> */}
      <form
        onSubmit={handleSubmit}
        className="bg-white sm:shadow-lg rounded px-8 pt-8 pb-8 mb-4 w-full sm:max-w-md"
        data-cy="login-form"
      >
        <h2 className="text-gray-700 text-2xl">Sign in to your account</h2>
        <div className="mt-6 mb-10">
          <label
            htmlFor="email"
            className="block text-gray-700 text-md small-caps mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="tel"
            maxLength={8}
            name="userId"
            required
            className="border border-gray-300 rounded w-full py-3 px-4 text-base focus-outline"
            data-cy="login-email-input"
          />
        </div>
        <div className="mt-6 mb-10">
          <label
            htmlFor="password"
            className="block text-gray-700 text-md mb-2 flex justify-between"
          >
            <span className="small-caps">Password</span>
            <span className="text-indigo-500">
              <Link href="/">
                <a>Forgot your password?</a>
              </Link>
            </span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="border border-gray-300 rounded w-full py-3 px-4 text-base focus-outline"
            data-cy="login-password-input"
          />
        </div>
        <input
          type="submit"
          value="Sign In"
          className="btn-primary w-full my-2 focus-outline"
          data-cy="login-submit-button"
        />
      </form>
    </div>
  );
};

export default Login;
