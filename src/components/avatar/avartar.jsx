import clsx from "clsx";

export function Avatar ({children, size ="s"}) {
  // Kiểm tra nếu người dùng đã đăng nhập hay chưa
  const sizes = {
    s: "w-8 h-8",
    m: "w-12 h-12",
    l: "w-16 h-16",
    xl: "w-20 h-20",
  }
    return (
    <>
        <div className={clsx(
            "bg-gray-500 text-while rounded-full overflow-hidden flex items-center justify-center",
            sizes[size],
            )}>
                {children}
        </div>
    </>
    );
}