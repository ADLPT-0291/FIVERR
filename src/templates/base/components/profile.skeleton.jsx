export function ProfileSkeleton() {
  return (
    <div className="flex gap-4 pr-4 justify-between items-center">
      <div className="w-24 h-6 bg-gray-200 animate-pulse rounded"></div>
      <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
    </div>
  );
}