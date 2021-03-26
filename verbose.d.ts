type Config =
  | string
  | {
      message: string;
      level?: "throw" | "error" | "warn" | "log";
    };

declare function verbose(
  condition: any,
  config: Config,
  ...args: string[]
): asserts condition;

export = verbose;
