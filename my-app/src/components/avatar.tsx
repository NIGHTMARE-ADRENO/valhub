type AvatarProps = {
  avatarUrl: string; // ✅ lowercase 'string', and camelCase prop name
};

function Avatar({ avatarUrl }: AvatarProps) {
  return (
    <img
      src={avatarUrl}
      alt="Avatar"
      className="w-[50px] h-[50px] rounded-full object-cover shrink-0"
    />
  );
}

export default Avatar;
