# ▶️Youtube

#### ▶️Youtube : 유튜브 리액트 App(Youtube React-Application)

#### 💻Desktop

<img src="/public/img/desktop.jpg" alt="app-desktop">

#### 📱Mobile

<img src="/public/img/mobile.jpg" alt="app-mobile">

<br>

## ✨ Youtube 기능 / 완료한 기능(My self) ~7/8

<img src="/public/img/search.jpg" alt="app-search">

- ~~YouTube Data APIs(RESTful APIs) 사용하여 유튜브 동영상 데이터 가져오기~~
- ~~가장 인기있는(mostPopular) 동영상 리스트 가져오기~~
- ~~검색한(search) 동영상 리스트 가져오기~~
- ~~동영상 상세페이지에서 정보(동영상 재생, 동영상 정보, 채널정보 등) 보여주기~~

<br>

## ♻️ Refactoring 리팩토링 / 보완한 기능(Clone) 7/9~

#### 1. 컴포넌트 파일을 관리(정리)하는 방법

- 컴포넌트들은 기능별로 나누어 css, test코드와 같이 관리한다.

<img src="/public/img/components.png" alt="components">

<br>

#### 2. 네트워크 통신 시 원하는 데이터만 filtering 하기(map으로 가공 가능하다.)

- fetch

```javaScript
fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${input}&type=video&key=AIzaSyD3Y3NpgBRs7TjOFCbYWGOStHeM31U7dvA%20`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => // id를 id.video로 변환해주기
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((item) => setVideos(item))
```

- Axios

```javaScript
    return response.data.items.map((item) => ({...item, id: item.id.videoId,}));
```

<br>

#### 3. App 컴포넌트 한 페이지 내에서 display를 props전달하여 클릭 시 스타일(css) 변경하기

```javaScript
    <Video
            display={selectedVideo ? "list" : "grid" }
    ></Video>
```

```javaScript
    const Video = ({ video, onVideoClick, display }) => { // display 전달
    const displayType = display === "list" && styles.list; // list일경우 스타일반환

    return (
    <li
      className={`${styles.video} ${displayType}`} // list일 경우, 스타일 추가
    >
    )
}
```

<br>

#### 4. ❗하나의 컴포넌트 내에서 비즈니스 로직과 데이터 통신을 같이 수행하는 것은 좋지 않다.

- service파일 안에 네트워크 통신하는 Class(youtube.js)로직을 따로 관리한다(분리)

- 이유 : 컴포넌트는 하나의 일만 수행하도록 단순하게 만들어야 한다(리액트의 디자인패턴 MVC-View) / 유닛테스트 시 네트워크 통신도 따로 검사 / 테스트 때마다, 업데이트시 마다 네트워크 통신하는 것은 매우 비효율적이다.

- index.js에서 app의 props으로 Class를 전달하여 호출한다.

```javaScript
    const youtube = new Youtube(httpClient);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
    <>
        <App youtube={youtube} />
    </>
    );
```

<br>

#### 5. ❗APIs key는 절대 외부에 노출하지 않는다.

- 최상위 파일에 .env (환경설정) 파일을 생성하고, 그 안에 리액트 규칙에 따라 환경 변수를 만들어준다.

```javaScript
    REACT_APP_YOUTUBE_API_KEY = AIzaSyD3Y3NpgBRs7TjOFCbYWGOStHeM31U7dvA // 가상 key
```

- index.js에서 환경변수 키를 네트워크 통신 Class에 전달한다.

```javaScript
    const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
```

- 깃허브에 key가 업로드되면 안되기 때문에 .gitignore에서 .env를 추가하여 github에서 보이지 않도록 설정한다.

```javaScript
    # API KEYs
    .env
```

<br>

#### 6. 프로미스 반환하는 함수는 async, await으로 변환(직관성)

- 데이터 통신하는 프로미스는 async를 붙여주면 프로미스를 리턴한다는 것을 직관적으로 명시하여 함수 안의 구현사항을 확인하지 않아도 알 수 있다.

```javaScript
  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }
```

<br>

#### 7. deconstructing

- props인자를 받을 때 받아오는 인자를 직접 명시하면 정확히 어떤 데이터를 받아올지 직관적으로 파악 가능하다. 가독성에 좋고 또 따로 변수를 정의하지 않고 바로 사용 가능하다.

- props안의 video로 인자를 바로 받아와서 접근할 경우(video와 일치하면 반환)

```javaScript
    const Video = ({ video }) => {
```

- 인자의 이름을 바로 변경해서 받아오는 것도 가능하다.

```javaScript
    const Video = ({ video : videoItem}) => {
```

- video 안의 snippet을 받아올 경우

```javaScript
    const Video = ({ video : {snippet} }) => {
```

<br>

#### 8. 검색 시 기존 목록 초기화 하기 : State를 null로 업데이트 한다.

```javaScript
    setSelectedVideo(null);
```

<br>

#### 9. 불필요한 렌더링 줄이기(memo, useCallback)

- props이나 state가 변경될 때마다 업데이트될 필요가 없는경우 : memo

- memo를 사용해도 props이 변경되면 rendering이 계속 발생한다. > useCallback사용(함수가 한번만 만들어짐, 재사용) > 메모리에 자리를 많이 차지하기 때문사용해도 될 때와 사용하면 안될 때를 구분하여 사용한다.

- 사용할 경우 : useCallback 함수를 자식 컴포넌트로 계속 전달할때, 자식컴포넌트에서 계속 업데이트가 일어날 경우,

- 사용하지 않을 경우 : 간단한 jsx를 처리하는 등의 함수(자식 컴포넌트로 전달하지 않을 때 등)

<br>

#### 10. fetch APIs > Axios 라이브러리로 변경

<br>

## ✅ Takeaway 리팩토링 외 느낀점/개선할점

<br>

- img파일은 public 내에서 관리한다.

- 컴포넌트들은 기능별로 나누어 css, test코드와 같이 관리한다.

- 데이터 통신 시 Postman을 통해 유용하게 사용 가능하다.

- 비즈니스 로직이 없는 경우는 jsx에서 return() 생략 가능, {}대신 ()사용한다.

- flex : grow, shrink, basis 넓이 분배 더 공부하기

- useEffect() : mount + update 시 마다 호출된다. > update시 마다 데이터 통신은 불필요하다. > 빈 []를 전달 시 mount 시에만 호출이 가능하다.

- useCallback, useEffect, Lifecycle 등에서 두번째 인자[](=전달한 인자 업데이트 시마다 실행)를 전달하지 않을 시, 계속해서 새로운 함수를 만든다(업데이트 될 때마다 생성). 무한루프에 빠질 가능성이 높다.

- Axios 라이브러리 사용법 공부하기
