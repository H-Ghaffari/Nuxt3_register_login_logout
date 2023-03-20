export default defineNuxtPlugin(async (nuxtApp) => {
  const { authUser } = useAuth();

  const headers = useRequestHeaders(["cookie"]);

  try {
    const user = await $fetch("/api/auth/user", {
      headers,
    });

    console.log("user in plugin: ", user);
    authUser.value = user;
  } catch (error) {
    console.log("error in plugin: ", error);
    authUser.value = null;
  }
});
