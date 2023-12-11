export default function (iceId) {
  const { data, error } = useFetch(`/api/iceCream/${iceId}`);

  if (error.value)
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage,
    });

  return data;
}
