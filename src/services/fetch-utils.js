export async function getAffirmation() {
  const rawResponse = await fetch('/.netlify/functions/affirmations');
  const data = await rawResponse.json();
  return data;
}