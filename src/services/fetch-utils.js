export async function getAffirmation() {
  const rawResponse = await fetch('/.netlify/functions/affirmation');
  const data = await rawResponse.json();
  return data;
}
