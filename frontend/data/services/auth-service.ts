import { getStrapiURL } from "../../app/[lang]/utils/api-helpers";

interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}

interface LoginUserProps {
  identifier: string;
  password: string;
}

const baseUrl = getStrapiURL();

export async function registerUserService(userData: RegisterUserProps) {
  const url = new URL("/api/auth/local/register", baseUrl);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
      cache: "no-cache",
    });

    return response.json();
  } catch (error) {
    console.error("Registration Service Error:", error);
  }
}

export async function loginUserService(userData: LoginUserProps) {
  const url = new URL("/api/auth/local", baseUrl);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
      cache: "no-cache",
    });

    return response.json();
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}
export async function forgotPasswordService(email: string) {
  const url = new URL("/api/auth/forgot-password", baseUrl);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      cache: "no-cache",
    });
    return response.json();
  } catch (error) {
    console.error("Forgot Password Service Error:", error);
  }
}
export async function resetPasswordService(formData: FormData) {
  const url = new URL("/api/auth/reset-password", baseUrl);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        passwordConfirmation: formData.get("password"),
        password: formData.get("password"),
        code: formData.get("code"),
      }),
      cache: "no-cache",
    });
    return response.json();
  } catch (error) {
    console.error("Reset Password Service Error:", error);
  }
}
