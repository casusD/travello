# SEO Setup для Travello Travel Agency

## Обзор настроенных SEO компонентов

### ✅ 1. Мета теги и OpenGraph

- **Базовые мета теги**: title, description, keywords
- **OpenGraph**: для социальных сетей (Facebook, LinkedIn)
- **Twitter Cards**: для оптимизации в Twitter
- **Многоязычность**: поддержка английского и русского языков
- **Viewport**: адаптивная верстка

### ✅ 2. Структурированные данные (JSON-LD)

- **Organization**: информация о туристическом агентстве
- **WebSite**: данные о сайте с возможностью поиска
- **Service**: описание услуг путешествий
- **Offers**: туристические пакеты с ценами

### ✅ 3. Sitemap.xml

- Динамический sitemap через Next.js App Router
- Поддержка многоязычности
- Автоматическое обновление дат модификации

### ✅ 4. Robots.txt

- Разрешение индексации для всех поисковых роботов
- Указание на sitemap
- Разрешение статических ресурсов

### ✅ 5. Web App Manifest

- PWA готовность
- Иконки для разных устройств
- Shortcuts для быстрого доступа
- Скриншоты для app stores

## Что нужно настроить дополнительно

### 📝 Требуется ваше внимание:

1. **Домен**: Замените `https://travello.com` на ваш реальный домен в следующих файлах:

   - `src/app/layout.tsx` (metadataBase)
   - `src/app/[lang]/page.tsx` (baseUrl в generateMetadata)
   - `src/app/sitemap.ts` (baseUrl)
   - `public/robots.txt` (Sitemap URL)
   - `src/lib/seo.ts` (siteUrl)

2. **Коды верификации**: Добавьте реальные коды в `src/app/layout.tsx`:

   ```typescript
   verification: {
     google: 'your-google-verification-code',
     yandex: 'your-yandex-verification-code',
     yahoo: 'your-yahoo-verification-code',
   }
   ```

3. **Изображения для SEO**: Добавьте в папку `public/`:

   - `og-image.jpg` (1200x630px) - для OpenGraph
   - `twitter-image.jpg` (1200x600px) - для Twitter Cards
   - `apple-touch-icon.png` (180x180px) - для iOS
   - `icon-192.png` (192x192px) - для PWA
   - `icon-512.png` (512x512px) - для PWA
   - `icon-96.png` (96x96px) - для shortcuts
   - `screenshot-wide.jpg` (1280x720px) - скриншот для PWA
   - `screenshot-narrow.jpg` (640x1136px) - мобильный скриншот

4. **Социальные сети**: Обновите ссылки в `src/components/StructuredData.tsx`:
   ```typescript
   sameAs: [
   	'https://facebook.com/your-page',
   	'https://twitter.com/your-handle',
   	'https://instagram.com/your-profile',
   ];
   ```

## Рекомендации по дальнейшему улучшению SEO

### 🚀 Дополнительные улучшения:

1. **Google Analytics & Search Console**:

   ```bash
   npm install @next/third-parties
   ```

   Добавьте Google Analytics в layout.tsx

2. **Сжатие изображений**:

   ```bash
   npm install next-optimized-images
   ```

3. **Lazy loading для изображений**:
   Используйте Next.js Image компонент везде

4. **Скорость загрузки**:

   - Добавьте preconnect для Google Fonts
   - Используйте динамические импорты для больших компонентов
   - Настройте кэширование в next.config.ts

5. **Дополнительные страницы для SEO**:

   - Создайте страницы destinations/[slug]
   - Добавьте blog для контент-маркетинга
   - Создайте страницы FAQ и About

6. **Хлебные крошки (Breadcrumbs)**:
   Добавьте структурированные данные для навигации

## Проверка SEO

### Инструменты для тестирования:

1. **Google Search Console**: Проверка индексации и ошибок
2. **Google PageSpeed Insights**: Скорость загрузки
3. **Rich Results Test**: Проверка структурированных данных
4. **Open Graph Debugger**: Facebook/LinkedIn превью
5. **Twitter Card Validator**: Twitter превью
6. **Lighthouse**: Комплексный аудит SEO

### Команды для проверки:

```bash
# Запуск проекта в production режиме
npm run build
npm run start

# Проверка sitemap
curl http://localhost:3000/sitemap.xml

# Проверка robots.txt
curl http://localhost:3000/robots.txt

# Проверка manifest
curl http://localhost:3000/manifest.json
```

## Многоязычное SEO

Настроена поддержка hreflang для:

- Английского языка (en) - основной
- Русского языка (ru)

URL структура:

- `/en` - английская версия
- `/ru` - русская версия
- `/` - редирект на `/en`

## Контактная информация

Если нужна помощь с дополнительной настройкой SEO или возникли вопросы, обращайтесь!
