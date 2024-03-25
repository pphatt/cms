import {
  AlertCircle,
  AlignJustify,
  ArrowUpFromDot,
  Ban,
  BarChart3,
  Bookmark,
  BookMarked,
  BookOpen,
  CalendarIcon,
  CheckSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  ChevronUp,
  Circle,
  CircleUserRound,
  Clock,
  Expand,
  Eye,
  EyeOff,
  File,
  FilePen,
  FileTerminal,
  FileText,
  Filter,
  GalleryVerticalEnd,
  Globe,
  History,
  Home,
  Instagram,
  Laptop2,
  Loader2,
  LogIn,
  LogOut,
  Mail,
  MapPin,
  Moon,
  MoveHorizontal,
  MoveRight,
  MoveVertical,
  Phone,
  Play,
  Plus,
  Search,
  Settings,
  Star,
  SunMedium,
  User,
  Users,
  X,
  ZoomIn,
  ZoomOut,
  type IconNode as LucideIcon,
  type LucideProps,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  close: X,
  user: User,
  users: Users,
  logout: LogOut,
  terminal: FileTerminal,
  expand: Expand,
  mapPin: MapPin,
  phone: Phone,
  all: GalleryVerticalEnd,
  ban: Ban,
  filePen: FilePen,
  instagram: Instagram,
  moveHorizontal: MoveHorizontal,
  history: History,
  moveVertical: MoveVertical,
  settings: Settings,
  spinner: Loader2,
  checkSquare: CheckSquare,
  arrowUp: ChevronUp,
  arrowDown: ChevronDown,
  arrowRight: ChevronRight,
  arrowLeft: ChevronLeft,
  view: Eye,
  hide: EyeOff,
  alignJustify: AlignJustify,
  circle: Circle,
  star: Star,
  circleUserRound: CircleUserRound,
  bookmark: Bookmark,
  barChart3: BarChart3,
  play: Play,
  alertCircle: AlertCircle,
  home: Home,
  calendarIcon: CalendarIcon,
  login: LogIn,
  mail: Mail,
  clock: Clock,
  arrowUpVote: ArrowUpFromDot,
  globe: Globe,
  filter: Filter,
  fileText: FileText,
  moveRight: MoveRight,
  plus: Plus,
  search: Search,
  laptop: Laptop2,
  bookOpen: BookOpen,
  chevronsUpDown: ChevronsUpDown,
  bookmarks: BookMarked,
  file: File,
  zoomIn: ZoomIn,
  zoomOut: ZoomOut,
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  ),
  nextjs: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      ></path>
    </svg>
  ),
  facebook: ({ ...props }: LucideProps) => (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  ),
  twitter: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
    </svg>
  ),
  discord: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
  anilist: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-05a511f9=""
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 4.233 4.233"
      {...props}
    >
      <path
        fill="#19212d"
        d="M.794 0H3.44c.44 0 .793.354.793.794V3.44c0 .44-.354.793-.793.793H.794A.792.792 0 0 1 0 3.44V.794C0 .354.354 0 .794 0z"
      ></path>
      <path
        fill="#0af"
        d="M2.247.794c-.104 0-.16.057-.16.16v.155l.815 2.33h.807c.104 0 .162-.056.162-.16v-.354c0-.104-.058-.161-.162-.161h-.947V.954c0-.103-.057-.16-.161-.16z"
      ></path>
      <path
        fill="#fff"
        d="M1.293.794.363 3.44h.722l.158-.458h.786l.154.458h.719L1.976.794zm.114 1.602.225-.733.247.733z"
      ></path>
    </svg>
  ),
  mangaUpdates: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-05a511f9=""
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="#cbd6e8"
        stroke="#92a0ad"
        d="M3 .5h10c1.385 0 2.5 1.115 2.5 2.5v10c0 1.385-1.115 2.5-2.5 2.5H3A2.495 2.495 0 0 1 .5 13V3C.5 1.615 1.615.5 3 .5z"
      ></path>
      <path
        fill="#ff8c15"
        d="M14.22 12.29q0 .333-.048.681-.047.348-.19.633-.142.286-.395.476-.254.19-.666.19-.506 0-.776-.317-.253-.317-.348-.776-.158-.76-.206-1.52l-.063-1.536q-.016-.776-.08-1.536-.063-.76-.253-1.52-.174.602-.364 1.204t-.412 1.188q-.174.428-.348.87-.159.429-.285.872-.111.364-.19.744-.08.38-.174.745-.032.142-.095.364-.064.206-.159.427-.079.222-.174.412t-.206.285q-.253.222-.602.301-.332.095-.65.095-.506 0-.807-.364-.3-.364-.443-.808-.111-.332-.174-.665-.064-.348-.143-.68-.206-.904-.49-1.775-.27-.87-.508-1.774-.316.713-.57 1.425-.237.713-.332 1.473-.08.554-.095 1.124 0 .554-.143 1.11-.11.41-.364.633-.238.237-.681.237-.412 0-.681-.174-.27-.158-.428-.428-.158-.269-.221-.601-.048-.349-.048-.697 0-.744.19-1.584.19-.855.46-1.71.269-.855.554-1.695.3-.84.522-1.568.206-.713.301-1.41.111-.696.27-1.408.063-.301.205-.586.159-.301.365-.523.221-.221.506-.364.286-.142.618-.142.238 0 .49.079.254.063.46.206.206.126.333.332.127.206.127.491 0 .206-.032.412-.032.19-.032.396 0 1.742.238 3.437.237 1.695.728 3.373.65-1.49 1.093-3.041.444-1.552.855-3.12.127-.46.238-.935.111-.475.333-.918.206-.412.506-.665.317-.27.792-.27.285 0 .57.064.301.047.539.19.237.127.38.364.158.222.158.57 0 .254-.031.507-.016.238-.016.49 0 1.189.142 2.377.159 1.172.428 2.344.222.998.364 1.995.159.982.159 1.995z"
      ></path>
    </svg>
  ),
  animePlanet: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-05a511f9=""
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 4.233 4.233"
      {...props}
    >
      <path
        fill="#1c3867"
        d="M.794 0H3.44c.44 0 .793.354.793.794V3.44c0 .44-.354.793-.793.793H.794A.792.792 0 0 1 0 3.44V.794C0 .354.354 0 .794 0z"
      ></path>
      <path
        fill="#f0574b"
        d="M2.117.926a1.19 1.19 0 0 0-1.19 1.19 1.19 1.19 0 0 0 .015.19c.253.137.612.27 1.026.368.425.101.819.147 1.114.14a1.19 1.19 0 0 0 .225-.697A1.19 1.19 0 0 0 2.117.926zm-1.114 1.61a1.19 1.19 0 0 0 1.114.771 1.19 1.19 0 0 0 .813-.32 6.46 6.46 0 0 1-1.927-.45z"
      ></path>
      <path
        fill="#f69330"
        d="M.935 1.522c-.346.017-.669.093-.709.232-.082.286.66.695 1.67.936 1.009.241 1.941.24 2.024-.045.04-.139-.203-.344-.49-.511l-.002.08c.133.099.195.212.172.291-.064.222-.787.238-1.632.037-.845-.2-1.47-.545-1.406-.767.024-.081.153-.149.331-.174z"
      ></path>
    </svg>
  ),
  kitsu: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-05a511f9=""
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 4.233 4.233"
      {...props}
    >
      <path
        fill="#493c47"
        d="M.794 0H3.44c.44 0 .793.354.793.794V3.44c0 .44-.354.793-.793.793H.794A.792.792 0 0 1 0 3.44V.794C0 .354.354 0 .794 0z"
      ></path>
      <path
        fill="#e75e45"
        d="M1.551.266a.107.107 0 0 0-.079.018c-.008.005-.013.011-.02.018L1.44.32a.732.732 0 0 0-.121.527 1.284 1.284 0 0 0-.12.071c-.007.005-.065.045-.11.087A.74.74 0 0 0 .554.928L.532.933C.524.937.515.94.509.945a.109.109 0 0 0-.03.148v.003l.006.008c.088.12.188.225.296.318l.003.003c.07.06.203.146.3.181 0 0 .6.231.63.245.012.004.03.01.037.01a.106.106 0 0 0 .125-.084.274.274 0 0 0 .003-.038V1.06a1.211 1.211 0 0 0-.061-.345L1.816.71a1.836 1.836 0 0 0-.19-.39L1.623.31 1.62.308a.106.106 0 0 0-.069-.042zM1.533.43c.057.095.105.193.143.296a1.314 1.314 0 0 0-.224.06.605.605 0 0 1 .081-.356zm1.102.558a1.17 1.17 0 0 0-.588.126c-.01.005-.022.01-.033.017v.605c0 .008 0 .04-.005.066a.238.238 0 0 1-.246.193.399.399 0 0 1-.095-.021l-.525-.204a1.429 1.429 0 0 0-.05-.02 4.781 4.781 0 0 0-.59.592l-.011.013a.108.108 0 0 0 0 .123.11.11 0 0 0 .083.047.105.105 0 0 0 .065-.018 3.096 3.096 0 0 1 .668-.364.11.11 0 0 1 .127.02c.037.038.039.1.007.14l-.036.06a3.13 3.13 0 0 0-.304.665l-.005.019v.001a.1.1 0 0 0 .016.084.11.11 0 0 0 .085.046.101.101 0 0 0 .064-.019.144.144 0 0 0 .024-.021c.001-.004.005-.007.006-.01a2.93 2.93 0 0 1 .273-.332 3.11 3.11 0 0 1 1.666-.929c.005-.002.01-.001.015-.001a.067.067 0 0 1 .063.07.065.065 0 0 1-.052.06c-.603.129-1.69.845-1.31 1.885a.318.318 0 0 0 .02.041.11.11 0 0 0 .083.047c.018 0 .07-.005.102-.062.061-.116.177-.246.513-.385.935-.387 1.09-.94 1.106-1.291v-.02A1.19 1.19 0 0 0 2.635.988zm-1.92.06a.592.592 0 0 1 .268.06 1.164 1.164 0 0 0-.138.188 1.803 1.803 0 0 1-.224-.24.602.602 0 0 1 .094-.009zm1.367 2.01c.194.314.533.34.533.34-.347.145-.484.288-.557.404a1.016 1.016 0 0 1 .024-.744z"
      ></path>
    </svg>
  ),
  mal: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-05a511f9=""
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 4.233 4.233"
      {...props}
    >
      <path
        fill="#2e51a2"
        d="M.794 0H3.44c.44 0 .793.354.793.794V3.44c0 .44-.354.793-.793.793H.794A.792.792 0 0 1 0 3.44V.794C0 .354.354 0 .794 0z"
      ></path>
      <path
        fill="#fff"
        d="M1.935 2.997a1.459 1.459 0 0 1-.149-.378 1.074 1.074 0 0 1-.032-.317.99.99 0 0 1 .037-.325c.077-.286.267-.479.53-.538.085-.019.155-.023.345-.023h.17l.083.295-.461.004-.042.014a.385.385 0 0 0-.225.195.582.582 0 0 0-.048.126c.128.01.212.006.36.006v-.297h.376v1.059h-.381v-.466h-.212c-.206 0-.212 0-.212.01a1.274 1.274 0 0 0 .152.458c-.007.008-.266.195-.27.197-.004.001-.013-.008-.02-.02zM.265 1.416H.6l.3.428.303-.428h.336v1.402H1.2l-.002-.85-.302.378-.291-.383-.003.855H.265zm2.9.005h.333v1.095l.47.003-.073.291-.73.003z"
      ></path>
    </svg>
  ),
  novelUpdates: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-05a511f9=""
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 268.792 268.792"
      {...props}
    >
      <path fill="#2d3f51" d="M.001.001h268.792v268.792H.001z"></path>
      <path d="M155.914 111.506c2.284 2.092 8.377 8.155 11.805 8.155 4.76 0 4.952-8.574 4.952-12.128 0-5.23-.192-14.222-1.715-19.03-2.666-8.784-12.758-5.648-12.758-16.94 0-13.385 19.422-12.758 27.42-12.758 8.38 0 29.136-1.046 29.136 13.384 0 11.922-10.092 7.53-13.33 17.15-2.475 7.529-2.475 20.494-2.475 28.44v54.164c0 9.411 1.142 38.06-11.616 38.06-3.809 0-7.045-2.508-9.902-5.227l-58.84-57.928c-2.666-2.72-7.617-7.738-11.616-7.738-5.902 0-6.093 13.594-6.093 17.986 0 5.855.19 13.593 1.332 19.03 2.858 13.385 12.95 8.366 12.95 18.612 0 14.011-19.614 15.266-28.563 15.266-8.76 0-28.373-1.255-28.373-14.847 0-11.084 11.044-6.692 12.948-20.076 1.333-8.992 1.714-22.168 1.714-31.58 0-15.056 0-30.322-2.095-45.38-3.047-20.913-16.757-12.756-16.757-25.305 0-14.846 25.707-14.011 34.277-14.011 11.805 0 13.9.838 22.469 9.203l45.13 43.498z"></path>
    </svg>
  ),
  amazon: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-05a511f9=""
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 4.233 4.233"
      {...props}
    >
      <path
        fill="#fff"
        d="M.794 0H3.44c.44 0 .793.354.793.794V3.44c0 .44-.354.793-.793.793H.794A.792.792 0 0 1 0 3.44V.794C0 .354.354 0 .794 0z"
      ></path>
      <path
        fill="#ffa700"
        d="M3.537 3.064a.695.695 0 0 0-.382.107c-.034.024-.028.057.01.053.125-.015.403-.049.453.015.05.064-.055.326-.102.443-.014.035.016.05.048.023.209-.175.262-.54.22-.593-.021-.026-.123-.05-.247-.048zM.34 3.09c-.025.004-.037.043-.01.073.456.518 1.057.83 1.725.83.476 0 1.03-.19 1.41-.545.064-.058.01-.147-.054-.112-.428.229-.893.34-1.317.34A2.94 2.94 0 0 1 .37 3.1a.045.045 0 0 0-.03-.01z"
      ></path>
      <path d="M2.094.257c-.468 0-.99.175-1.1.753-.012.062.033.094.074.103l.476.052c.045-.003.077-.047.086-.091.04-.2.208-.295.395-.295.102 0 .217.037.277.127.069.102.059.24.059.357v.065c-.285.031-.658.053-.925.17a.835.835 0 0 0-.524.804c0 .511.322.767.736.767.35 0 .541-.083.811-.358.09.13.119.192.282.328.037.02.084.018.117-.012v.002c.099-.088.277-.243.378-.327.04-.033.033-.086.001-.131-.09-.124-.185-.225-.185-.456V1.35c0-.325.022-.624-.217-.847-.189-.181-.501-.245-.74-.245zm.268 1.464v.107c0 .192.004.351-.092.522-.079.138-.203.223-.341.223-.189 0-.3-.144-.3-.357 0-.419.377-.495.733-.495z"></path>
    </svg>
  ),
  eBookJapan: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-05a511f9=""
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 4.233 4.233"
      {...props}
    >
      <path
        fill="#fff"
        d="M.794 0H3.44c.44 0 .793.354.793.794V3.44c0 .44-.354.793-.793.793H.794A.792.792 0 0 1 0 3.44V.794C0 .354.354 0 .794 0z"
      ></path>
      <path
        fill="#e95e5b"
        d="M3.518 2.116s.218-.129.218-.436-.218-.435-.218-.435L2.008.374l-1.51.87 1.51.872s.218.129.218.436-.218.435-.218.435.218.13.218.436-.218.436-.218.436l1.51-.872s.218-.129.218-.435-.218-.436-.218-.436z"
      ></path>
      <path
        fill="#231815"
        d="M3.845 1.68c0-.364-.26-.523-.27-.53h-.002L2.063.28a.11.11 0 0 0-.11 0L.46 1.14c-.026.015-.071.041-.071.104a.109.109 0 0 0 .053.094.408.408 0 0 1 .165.342.403.403 0 0 1-.165.343.108.108 0 0 0-.054.093.11.11 0 0 0 .054.094.408.408 0 0 1 .165.342.403.403 0 0 1-.165.343.108.108 0 0 0-.054.093.109.109 0 0 0 .055.095l1.51.871a.109.109 0 0 0 .11 0l1.51-.871a.619.619 0 0 0 .272-.53.636.636 0 0 0-.162-.436.635.635 0 0 0 .162-.437zM.813 1.552l1.14.658c.01.007.164.109.164.342a.42.42 0 0 1-.12.304L.68 2.096a.637.637 0 0 0 .145-.416.716.716 0 0 0-.012-.128zm0 .871 1.14.658c.011.008.164.11.164.342a.42.42 0 0 1-.12.305L.68 2.968a.637.637 0 0 0 .145-.416.701.701 0 0 0-.012-.128zm2.649.47-1.139.658a.716.716 0 0 0 .012-.128.637.637 0 0 0-.145-.415l1.318-.76a.416.416 0 0 1 .119.304.403.403 0 0 1-.164.342zm0-.87-1.139.657a.716.716 0 0 0 .012-.128.618.618 0 0 0-.272-.53L.716 1.245 2.008.498l1.455.839c.012.008.164.11.164.342a.405.405 0 0 1-.164.343z"
      ></path>
    </svg>
  ),
  bookWalker: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-05a511f9=""
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 4.233 4.233"
      {...props}
    >
      <path
        fill="#fff"
        d="M.794 0H3.44c.44 0 .793.354.793.794V3.44c0 .44-.354.793-.793.793H.794A.792.792 0 0 1 0 3.44V.794C0 .354.354 0 .794 0z"
      ></path>
      <path fill="#e50012" d="M3.563.826h.406V3.41h-.406z"></path>
      <path fill="#009fe8" d="M.265 3.34.792.81l.397.083-.527 2.53z"></path>
      <path fill="#530000" d="M1.19.826h.406V3.41H1.19z"></path>
      <path fill="#b4b4b5" d="M1.98.826h.407V3.41H1.98z"></path>
      <path fill="#009844" d="M2.772.826h.405V3.41h-.405z"></path>
    </svg>
  ),
  cdjapan: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-05a511f9=""
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="#09c"
        d="M3 0h10c1.662 0 3 1.338 3 3v10c0 1.662-1.338 3-3 3H3c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3z"
      ></path>
      <path
        fill="#fff"
        d="M5.995 8.905q-.084.307-.238.578-.153.263-.406.46-.253.198-.629.307-.368.11-.882.11-.859 0-1.28-.417-.414-.417-.414-1.104 0-.424.13-.862.13-.44.414-.797.284-.359.72-.585.438-.234 1.051-.234.537 0 .882.146.353.146.552.373.2.22.261.482.07.256.046.483H4.814q.023-.241-.046-.41-.061-.175-.337-.175-.215 0-.376.176-.153.175-.26.43-.1.25-.154.535-.046.285-.046.504 0 .57.406.57.215 0 .353-.139.138-.146.245-.431zm5.288-3.701-.892 4.08q-.066.32-.124.582-.051.262-.088.475H8.863q0-.092.007-.17.015-.078.03-.184-.351.432-1.031.432-.6 0-.921-.376-.322-.383-.322-1.05 0-.447.132-.887.131-.44.387-.788.256-.347.629-.56.38-.22.87-.22.358 0 .6.1.248.099.32.22l.366-1.654zm-2.39 2.278q-.213 0-.374.156-.16.149-.27.369-.11.213-.168.461-.059.241-.059.433 0 .284.103.433.102.149.336.149.175 0 .307-.078.132-.086.234-.235.102-.149.168-.354.073-.206.124-.462.088-.432 0-.652-.08-.22-.402-.22zm3.18-1.962.245-1.148h1.561l-.244 1.148zm1.443.549-.937 4.389c-.061.304-.135.565-.219.785s-.194.4-.33.54c-.134.14-.303.245-.506.312a2.258 2.258 0 0 1-.726.102c-.095 0-.205-.006-.329-.017-.182-.018-.441-.08-.537-.092l.278-1.113c.029.005.262.04.285.04h.05c.158 0 .267-.037.33-.11a.706.706 0 0 0 .126-.312l.962-4.525z"
      ></path>
    </svg>
  ),
  showProgressbar: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-a31e942f=""
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 15h16M7 15v-5m10 5v-5M4 9h16"
      ></path>
    </svg>
  ),
  hiddenProgressbar: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-a31e942f=""
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 15h16"
      ></path>
    </svg>
  ),
  leftToRight: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-a31e942f=""
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m12 16 4-4-4-4m-4 4h8"></path>
    </svg>
  ),
  rightToLeft: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-a31e942f=""
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m12 8-4 4 4 4m4-4H8"></path>
    </svg>
  ),
  showHeader: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-a31e942f=""
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M3 9h18"
      ></path>
    </svg>
  ),
  hiddenHeader: ({ ...props }: LucideProps) => (
    <svg
      data-v-4c681a64=""
      data-v-a31e942f=""
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
      ></path>
    </svg>
  ),
}
