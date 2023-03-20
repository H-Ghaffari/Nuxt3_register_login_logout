export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    public: { apiBase },
  } = useRuntimeConfig();

  try {
    const data = await $fetch(`${apiBase}/register`, {
      method: "POST",
      body: body,
      headers: {
        Accept: "application/json",
      },
    });
    // console.log(data);
    return data.user;
  } catch (error) {
    // console.log("my error: ", error);
    return error;
  }
});
