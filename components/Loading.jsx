export default function Loading({ isVisible }) {
    if (!isVisible) return null;

    return (
        <h2 className="mt-4 text-center">
            Loading...
        </h2>
    );
}