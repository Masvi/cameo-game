export const loadCelebrities = async () => {
  const response = await fetch(
    "https://cameo-explorer.netlify.app/celebs.json"
  );

  const data = await response.json();

  const lookup = new Map();
  const subset = new Set();

  data.forEach((element) => lookup.set(element.id, element));
  data.forEach((element) => {
    if (element.reviews >= 50) {
      subset.add(element);
      element.similar.forEach((id) => {
        subset.add(lookup.get(id));
      });
    }
  });

  return {
    celebs: Array.from(subset),
    lookup,
  };
};

export const loadCelebritiesDetails = async (celeb) => {
  const response = await fetch(
    `http://cameo-explorer.netlify.app/celebs/${celeb.id}.json`
  );
  return await response.json();
};
