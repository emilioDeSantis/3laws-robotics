export default function dateDifference(fromDate: string): string {
    const today = new Date();
    const inputDate = new Date(fromDate);
    const ONE_DAY = 24 * 60 * 60 * 1000; // Hours * minutes * seconds * milliseconds
    
    const diffTime = Math.abs(today.getTime() - inputDate.getTime());
    const diffDays = Math.ceil(diffTime / ONE_DAY);

    if (diffDays < 1) return "Today";
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 30) return `${diffDays} days ago`;

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return "1 month ago";
    if (diffMonths < 12) return `${diffMonths} months ago`;

    const diffYears = Math.floor(diffDays / 365);
    if (diffYears === 1) return "1 year ago";
    return `${diffYears} years ago`;
}