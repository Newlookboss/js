async function updataProfile(firstName, lastName) {
  const response = await fetch(`${apiURL}/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName }, { lastName }),
  });
  return await response.json();
}
