export interface ITeamMember {
  id: string;
  name: string;
  status: string;
  role: string;
  email: string;
  teams: string[];
}

export interface ITeamMemberResponse {
  status: string | null;
  message: string | null;
  data: ITeamMember
}

export interface IPagination {
  total: number;
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  links: {
    first: string;
    last: string;
    prev: string;
    next: string;
  }
}
