/**
 * Used to create unsafe defaults for typescript types
 * that need to be replaced with real values
 * before the value was consumed
 *
 * @param error error message for thrown error
 * @returns unsafe value
 * @throws Error instance with error message that was passed as an argument
 */
export const invariant = <T extends object>(error: string): T => {
	return new Proxy<T>({} as never, {
		get: () => {
			throw new Error(error);
		},
	});
};
