export default async function (filters) {
  const { data, error } = await useFetch(`/api/menu`, {
    params: {
      ...filters,
    },
  });

  if (error.value)
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.message,
    });

  return data;
}
