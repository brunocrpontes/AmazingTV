export type TVMazeServiceErrorBase<Name extends string = string, Message extends string = string, Code extends number = number, Status extends number = number> = {
  name: Name;
  message: Message;
  code: Code;
  status: Status
};

export type TVMazeServiceNotFound = TVMazeServiceErrorBase<"Not Found", "", 0, 404>;

export type TVMazeServiceError = TVMazeServiceNotFound;