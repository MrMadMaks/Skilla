export interface ICall {
  id: number;
  partner_data: {
    phone: string;
  };
  date: string;
  sourse: string;
  date_notime: string;
  time: number;
  from_number: string;
  from_extension: string;
  to_number: string;
  to_extension: string;
  is_skilla: number;
  status: string;
  record: string;
  line_number: string;
  in_out: number;
  from_site: number;
  person_avatar: string;
}
