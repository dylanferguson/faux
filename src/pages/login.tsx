import { useRouter } from "next/router";
import { Link } from "components/atoms";

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
    <div className="flex flex-col items-center justify-center min-h-screen pt-10 pb-20 bg-white bg-opacity-25">
      <form
        onSubmit={handleSubmit}
        className="w-full px-8 pt-8 pb-8 mb-4 bg-white rounded sm:shadow-lg sm:max-w-md"
        data-cy="login-form"
      >
        <h2 className="text-2xl text-gray-700">Sign in to your account</h2>
        <div className="mt-6 mb-10">
          <label
            htmlFor="email"
            className="block mb-2 text-gray-700 text-md small-caps"
          >
            Email
          </label>
          <input
            id="email"
            type="tel"
            maxLength={8}
            name="userId"
            required
            className="w-full px-4 py-3 text-base border border-gray-300 rounded focus-outline"
            data-cy="login-email-input"
          />
        </div>
        <div className="mt-6 mb-10">
          <label
            htmlFor="password"
            className="flex justify-between block mb-2 text-gray-700 text-md"
          >
            <span className="small-caps">Password</span>
            <span className="text-indigo-500">
              <Link href="/">Forgot your password?</Link>
            </span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="w-full px-4 py-3 text-base border border-gray-300 rounded focus-outline"
            data-cy="login-password-input"
          />
        </div>
        <input
          type="submit"
          value="Sign In"
          className="w-full my-2 btn-primary focus-outline"
          data-cy="login-submit-button"
        />
      </form>
    </div>
  );
};

export default Login;
