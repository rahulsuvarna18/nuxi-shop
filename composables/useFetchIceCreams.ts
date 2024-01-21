export default async function () {
  const { data, error } = await useFetch(`/api/menu`);

  if (error.value)
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.message,
    });

  return data;
}
