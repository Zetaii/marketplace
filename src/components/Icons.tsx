import { LucideProps } from "lucide-react"

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      {...props}
      width="500"
      height="500"
      viewBox="10 0 210 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M96.135 122.038c-1.128-.203-1.57-.28-2.012-.362-14.288-2.657-23.32-11.303-27.6-24.895-2.668-8.472 2.18-14.711 11.066-15.122 7.276-.337 12.256 3.845 16.66 8.711 5.677 6.274 10.881 12.973 16.457 19.341 8.028 9.167 17.487 15.07 30.429 13.248 11.605-1.634 21.718-6.291 30.518-13.956 1.323-1.152 2.774-2.156 4.167-3.229l-.878-1.035c-7.387 2.294-14.921 3.065-22.619 2.678-11.648-.586-22.747-3.018-32.678-9.413-9.062-5.836-15.745-13.656-18.922-24.101-2.566-8.438 2.686-14.341 11.43-13.121 3.457.482 6.367 2.039 8.979 4.247 2.127 1.796 4.167 3.7 6.336 5.442 10.206 8.201 24.467 8.657 37.422-.247-21.298-.097-35.788-11.812-48.515-26.659-4.981-5.811-9.844-11.726-14.928-17.445C91.61 15.053 80.697 5.303 65.754 1.977 46.666-2.272 28.238.505 10.55 8.606 7.023 10.221 3.636 12.099 0 15.125c1.8 0 2.782.022 3.762-.003 8.918-.23 15.601 3.733 20.421 11.028 3.508 5.309 5.161 11.313 6.421 17.49 1.87 9.167.902 18.513 1.982 27.722 2.776 23.675 14.876 40.196 37.406 48.656 8.262 3.103 16.736 4.136 26.143 2.02zM39.196 14.041c-3.56.898-6.405-.539-9.337-3.506 5.021-1.251 9.449-1.736 14.207-1.923-.389 3.089-2.211 4.759-4.87 5.429zm116.658 138.251c-.31-2.279-2.257-3.283-3.788-4.475-6.772-5.271-14.692-7.137-23.089-7.292-5.011-.092-9.97-.466-14.696-2.223-2.166-.805-4.589-1.839-4.534-4.638.055-2.84 2.526-3.643 4.775-4.315 1.841-.55 3.741-.901 5.837-1.391-5.324-3.412-10.525-3.885-17.455-1.098-10.909 4.386-21.664 3.866-32.539-.061-6.14-2.216-11.589-5.695-17.262-8.776l-.155.107.147-.102c-.14-.428-.394-.439-.72-.2l.445.39c4.705 7.711 11.061 13.915 18.241 19.217 13.828 10.21 28.932 16.299 46.605 13.597a243.203 243.203 0 0 1 17.216-2.014c7.218-.583 14.095 1.448 20.972 3.274zM122.535 41.673c-.382-.277-.749-.972-1.529-.253 6.358 8.6 14.526 14.94 24.361 18.931 15.873 6.441 31.983 7.543 48.46 1.859 12.792-4.412 21.991-.101 26.768 12.319.691-14.416-7.79-24.92-21.299-26.979-7.6-1.158-14.617 1.363-21.736 3.428-19.811 5.744-38.221 2.908-55.025-9.305zm98.737 56.228c2.582.217 5.162.451 7.743.677-5.832-5.123-12.94-5.529-20.131-5.12-10.95.622-18.839 6.937-26.031 14.482-6.337 6.65-12.063 14.11-21.52 16.782.158.284.199.426.243.426 1.272.019 2.547.079 3.816.021 13.735-.622 26.674-3.519 36.967-13.487 3.241-3.139 6.142-6.626 9.271-9.884 2.61-2.717 5.775-4.223 9.642-3.897zm-31.907-17.022c-10.25.896-19.154 5.136-27.517 10.727-6.437 4.303-13.321 6.339-21.057 4.993-1.361-.237-2.732-.414-4.098-.619l-.047.572c.492.253.967.549 1.479.752 1.289.51 2.559 1.124 3.897 1.442 14.886 3.539 29.136 1.726 41.984-6.573 8.098-5.231 16.481-6.222 25.567-4.871.918.137 1.832.304 2.754.39.854.081 1.746.93 2.899.011-7.943-5.738-16.499-7.642-25.861-6.824zm-36.634-34.793c5.377.186 10.73-.518 16.354-3.859-1.647.146-2.346.143-3.016.277-7.748 1.544-14.703-.146-20.898-5.044-2.273-1.798-4.584-3.548-6.886-5.309-9.126-6.98-19.591-9.315-31.038-9.117.185.563.196.949.395 1.149 12.455 12.598 26.87 21.275 45.089 21.903zm90.142 64.638c-7.708-7.645-18.052-8.63-27.624-1.958 6.336.285 11.092 2.306 14.949 6.3 1.365 1.413 2.78 2.8 4.307 4.032 5.832 4.704 15.719 4.93 21.495.566-6.785-2.648-6.785-2.648-13.127-8.94zm-76.767 58.545c-6.774-12.609-18.159-15.454-31.311-14.608 3.888 1.078 7.519 2.737 10.851 5.063 3.061 2.137 5.637 4.783 8.176 7.493 5.031 5.369 12.883 8.664 18.086 7.55-2.389-1.506-4.511-3.096-5.802-5.498zm63.031-70.431c.002-.08.004-.161.009-.245l-.02.021.022-.024-.133-.012c.026.024.054.043.08.067l.042.193zm-72.907 53.751a36.032 36.032 0 0 0-.267-.151.463.463 0 0 0 .056.159c.018.03.138-.004.211-.008zm-.267-.151c-.008-.041-.015-.083-.026-.124l-.031.038.031-.037-.083-.023c.005.034.017.062.021.097l.088.049z"
        fill="#FD4F00"
      />
    </svg>
  ),
}
