function Questions() {
  return (
    <>
      <h2>Порівняй відповідь (перегорни картку)</h2>
      <div className="taskWrap">
        <div className="mainTaskCard">
          <div className="frontCard">
            function -Ліниве завантаження <br /> (lazy loading) <br />{" "}
            Сформувати об'екти роутера
          </div>
          <div className="backCard">
            <p>
              <span>
                {" "}
                const pagesList = <span className="accent">Object.keys</span>
                (frontRoutes.pages);
              </span>
              <br />
              <br />
              <span>
                export const appRouterRoutes = pagesList
                <span className="accent">.map</span>((page) =&gt; (&#123;
              </span>
              <br />
              <span>
                {" "}
                ...frontRoutes.<span className="accent">pages[page]</span>,
              </span>
              <span>
                {" "}
                <span className="accent">
                  <br />
                  lazy: async () =&gt; (&#123;
                </span>
              </span>
              Component: <br />
              <span>
                {" "}
                (<span className="accent">await import</span>(`../../pages/$
                <span className="accent">&#123;page&#125;.jsx</span>`))
              </span>
              <span className="accent"> .default</span>,
              <br />
              &#125;),
              <br />
              &#125;));
            </p>
          </div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">Алгоритм і підключення ротів</div>
          <div className="backCard">
            <p>
              {" "}
              1 У 📂shared -інформація про роти/сторінки : <br />
              frontRoutes = &#123;
              <br />
              pages: &#123;
              <br />
              <span className="accent"> XPage:&#123;...&#125;, ...</span>
              <br />
            </p>
            <p>
              <span>
                {" "}
                2 Сформувати об'екти роутера (
                <span className="accent">function - lazy</span> loading)
              </span>{" "}
              <br />
              <span>📂router &gt; 📄appRouterRoutes.js</span> <br />
              appRouterRoutes =
            </p>
            <p>
              <span>
                3 Використати і{" "}
                <span className="accent">додати об'ект loader</span>
              </span>{" "}
              <br />
              📂router &gt; 📄router.jsx
              <br />
              ...
              <br />
              export const router ={" "}
              <span className="accent">createBrowserRouter([ </span>&#123;
              <br />
              path: "/",
              <br />
              Component: MainLayout,
              <br />
              <br />
              errorElement:&lt;GlobalErrorPage &gt;,
              <br />
              <br />
              <span>
                {" "}
                <span className="accent"> children:</span> appRouterRoutes
                <span className="accent">.map</span>
                ((route) =&gt; (&#123;
              </span>
              <br />
              <span className="accent">...route</span>,
              <br />
              <span className="accent">loader:</span> () =&gt;
              authLoader(route),
              <br />
              &#125;)),
              <br />
              &#125;,
              <br />
              ]);
              <br />
            </p>
          </div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">
            <p>
              {" "}
              що робить метод <span className="accent">
                injectEndpoints{" "}
              </span>{" "}
              <br />
              authApi = baseApi.injectEndpoints(&#123; <br /> endpoints: (build)
              =&gt; (&#123;
            </p>
          </div>
          <div className="backCard">
            <p>
              {" "}
              injectEndpoints- Включіти єдпоінти /
              <span className="accent"> добавити edpoints </span>до функції{" "}
              <br />
            </p>
          </div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">
            <p>де тримати інформацію про роти?</p>
          </div>
          <div className="backCard">
            <p>
              <span>
                <span className="accent"> 📂shared</span> &gt; 📂routes &gt;{" "}
                <br />
                📄apiRoutes.js <br /> 📄frontRoutes.js
              </span>
            </p>
          </div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">
            <p>
              Що робить метод <span className="accent"> isAnyOf</span>? <br />
              extraReducers: (builder) =&gt; &#123;
              <br />
              builder
              <br />
              .addMatcher(
              <br />
              isAnyOf(
            </p>
          </div>
          <div className="backCard">
            addCase - аналізує 1 мутацію, <br />
            addMatcher - може аналізувати декілька мутацій
            <br />
            <p>
              в addMatcher - те{" "}
              <span className="accent">що передадуть 2 параметром</span> ,
              <span className="accent">спрацьє на любий запит в isAnyOf</span>{" "}
            </p>
            <p>
              <span className="accent"> extraReducers</span>: (builder) =&gt;
              &#123;
              <br />
              builder
              <br />
              <span className="accent"> .addMatcher(</span>
              <br />
              <span className="accent"> isAnyOf(</span>
              <br />
              authApi.endpoints.login.matchPending,
              <br />
              authApi.endpoints.logout.matchPending,
              <br />
              authApi.endpoints.refresh.matchPending
              <br />
              ),
              <br />
              <span className="accent"> (state) =&gt; &#123;</span>
              <br />
              state.loading = true
              <br />
              state.error = null
              <br />
              &#125;
              <br />
              )<br />.
            </p>
          </div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">
            <p>В яких папках мутації і слайс з аналізом мутацій ?</p>
          </div>
          <div className="backCard">
            <p>
              <span className="accent"> 📂features </span>&gt; 📂auth <br />{" "}
              &gt; 📂api &gt; <br />
              📄 authApi.js <br />
              📄authSlice.js{" "}
            </p>
          </div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">
            хук <span className="accent">useLogin()</span>
          </div>
          <div className="backCard">
            <p>
              export function<span className="accent"> useLogin()</span> &#123;
              <br />
              <br />
              <span>
                const [<span className="accent">loginMutation</span>, &#123;
                isLoading, error &#125;] =
                <span className="accent"> useLoginMutation()</span>;
              </span>
              <br />
              <br />
              async function login(credentials) &#123;
              <br />
              const result = await{" "}
              <span className="accent">
                loginMutation(credentials).unwrap()
              </span>
              ;
              <br />
              return <span className="accent">result</span>;
              <br />
              &#125;
              <br />
              return
              <span className="accent">
                {" "}
                &#123; login, isLoading, error &#125;;
              </span>
              <br />
              &#125;
            </p>
          </div>
          <br />
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">
            Використання хука useLogin() в LoginForm()
          </div>
          <div className="backCard">
            <p>
              export function LoginForm() &#123; <br />
              <br />
              const [email, setEmail] = useState("");
              <br />
              const [password, setPassword] = useState("");
              <br />
              <br />
              const &#123; <span className="accent">login,</span> isLoading,
              <span className="accent">error</span> &#125; ={" "}
              <span className="accent">useLogin()</span>;<br />
              const navigate = useNavigate();
              <br />
              <br />
              const onSubmit = async (e) =&gt; &#123;
              <br />
              <br />
              e.preventDefault();
              <br />
              const <span className="accent">result</span> = await{" "}
              <span className="accent">
                login(&#123; email, password &#125;);
              </span>
              <br />
              <br />
              if (<span className="accent">result.user</span>)
              navigate(frontRoutes.pages.
              <span className="accent">HomePage.navigationPath</span>);
              <br />
              &#125;;
              <br />
              <br />
              return ( <br />
              &lt; form onSubmit=&#123;onSubmit&#125;&gt; <br />
              ... <br />
              якщо user не найден на bk =&gt; вивести помилку <br />
              &#123;<span className="accent">error</span> && (<br />
              &lt;div&gt;
              <br />
              &#123; <br />
              <span className="accent">error.data?.message </span>|| "Помилка
              входу" &#125;
              <br />
              &lt;/div&gt;
              <br />
              )&#125;
              <br />
            </p>
          </div>
          <br />
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">
            {" "}
            хук <span className="accent">useLogout()</span>
          </div>
          <div className="backCard">
            <p>
              export function <span className="accent">useLogout()</span> &#123;
              <br />
              const
              <span className="accent">
                {" "}
                [logoutMutation] = useLogoutMutation()
              </span>
              ;
              <br />
              const dispatch = useDispatch();
              <br />
              <br />
              const <span className="accent">logoutUser </span>= async () =&gt;
              &#123;
              <br />
              try &#123;
              <br />
              <span className="accent">await logoutMutation().unwrap();</span>
              <br />
              &#125; finally &#123;
              <br />
              <span className="accent"> dispatch(logout());</span>
              <br />
              &#125;
              <br />
              &#125;;
              <br />
              <span className="accent"> return &#123; logoutUser &#125;;</span>
              <br />
              &#125;
            </p>
          </div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">
            {" "}
            хук <span className="accent">useRefreshToken()</span>
          </div>
          <div className="backCard">
            <p>
              export function useRefreshToken() &#123;
              <br />
              const{" "}
              <span className="accent">
                [refreshMutation] = useRefreshMutation()
              </span>
              ;<br />
              const dispatch = useDispatch();
              <br />
              <br />
              async function <span className="accent">refresh()</span> &#123;
              <br />
              try &#123;
              <br />
              const result ={" "}
              <span className="accent">await refreshMutation()</span>;<br />
              <br /> if (<span className="accent">result.data</span>) &#123;
              <br />
              <span className="accent">
                dispatch(tokenRefreshed(result.data))
              </span>
              ;<br />
              return true; &#125; <br /> &#125;
              <br />
              <br />
              catch &#123;
              <br />
              <span className="accent"> dispatch(logout())</span>;<br />
              return false;
              <br />
              &#125;
              <br />
              <br />
              &#125;
              <br />
              return &#123; refresh &#125; ;<br />
              &#125;
            </p>
          </div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">
            <p>
              <span className="accent">AppInit()</span>
            </p>
            <p>
              автоматично зробити refresh (при оновленні залишитися
              автентифікованим)
            </p>
          </div>
          <div className="backCard">
            <p>
              export function <span className="accent">AppInit()</span> &#123;
              <br />
              const [refresh] = useRefreshMutation();
              <br />
              const dispatch = useDispatch();
              <br />
              <span className="accent"> useEffect</span>(() =&gt; &#123;
              <br />
              const init = async () =&gt; &#123;
              <br />
              await <span className="accent">refresh().unwrap()</span>;
              <br />
              &#125;;
              <br />
              init();
              <br />
              &#125;, [refresh, dispatch]);
              <br />
              <span className="accent"> return null;</span>
              <br />
              &#125;
            </p>
          </div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">front</div>
          <div className="backCard">back</div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">front</div>
          <div className="backCard">back</div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">front</div>
          <div className="backCard">back</div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">front</div>
          <div className="backCard">back</div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">front</div>
          <div className="backCard">back</div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">front</div>
          <div className="backCard">back</div>
        </div>
        <div className="mainTaskCard">
          <div className="frontCard">front</div>
          <div className="backCard">back</div>
        </div>
        <a href="https://www.youtube.com/live/XmaweyUBGoI" target="_blank">
          <button>Lesson</button>
        </a>
      </div>
    </>
  );
}

export default Questions;
