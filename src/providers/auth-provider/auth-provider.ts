"use client";

import { AuthBindings } from "@refinedev/core";
import { supabaseClient } from "@utility/supabase-client";
import Cookies from "js-cookie";

export const authProvider: AuthBindings = {
	login: async ({ email, password, providerName }) => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: providerName,
		});
		
		if (error) {
			return {
				success: false,
				error,
			};
		}
		Cookies.set("token", data.url, {
					expires: 30, // 30 days
					path: "/",
		});
		// if (data?.session) {
		// 	Cookies.set("token", data.session.access_token, {
		// 		expires: 30, // 30 days
		// 		path: "/",
		// 	});

		// 	return {
		// 		success: true,
		// 		redirectTo: "/",
		// 	};
		// }

		// for third-party login
		return {
			success: true,
			redirectTo: "/",
		};
	},
	logout: async () => {
		Cookies.remove("token", { path: "/" });
		const { error } = await supabaseClient.auth.signOut();

		if (error) {
			return {
				success: false,
				error,
			};
		}

		return {
			success: true,
			redirectTo: "/login",
		};
	},
	register: async (params) => {
		const { email, password, providerName } = params;
		try {
			const { data, error } = await supabaseClient.auth.signInWithOAuth({
				provider: providerName,
			});

			if (error) {
				return {
					success: false,
					error,
				};
			}

			if (data) {
				return {
					success: true,
					redirectTo: "/",
				};
			}
		} catch (error: any) {
			return {
				success: false,
				error,
			};
		}

		return {
			success: false,
			error: {
				message: "Register failed",
				name: "Invalid email or password",
			},
		};
	},
	check: async () => {
		const { data } = await supabaseClient.auth.getUser();
		const { user } = data;
		console.log(user);
		if (user) {
			return {
				authenticated: true,
			};
		}

		return {
			authenticated: false,
			redirectTo: "/login",
		};
	},
	getPermissions: async () => {
		const user = await supabaseClient.auth.getUser();

		if (user) {
			return user.data.user?.role;
		}

		return null;
	},
	getIdentity: async () => {
		const { data } = await supabaseClient.auth.getUser();
		const user = await supabaseClient
			.schema("public")
			.from("profiles")
			.select()
			.eq("id", data.user?.id);

		if (data?.user) {
			return {
				...data.user,
				...user.data,
				name: data.user.email,
			};
		}

		return null;
	},
	onError: async (error) => {
		if (error?.code === "PGRST301" || error?.code === 401) {
			return {
				logout: true,
			};
		}

		return { error };
	},
};
