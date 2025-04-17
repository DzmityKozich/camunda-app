export const getLastMonth = (): { today: string; monthAgo: string } => {
	const today = new Date();
	const monthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
	return { today: today.toISOString(), monthAgo: monthAgo.toISOString() };
};
