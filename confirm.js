const results = await Promise.all(resultingPromises);
const merge = [...new Set([...a, ...b])];