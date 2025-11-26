import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const specifications = [
    { icon: 'Users', label: 'Пассажиров', value: '5 мест' },
    { icon: 'Gauge', label: 'Мощность', value: '156 л.с.' },
    { icon: 'Fuel', label: 'Расход', value: '8.5 л/100км' },
    { icon: 'Package', label: 'Грузоподъемность', value: '1200 кг' },
    { icon: 'Ruler', label: 'Длина', value: '5995 мм' },
    { icon: 'Zap', label: 'Двигатель', value: '2.8L Дизель' }
  ];

  const configurations = [
    {
      name: 'Standard 6+1',
      price: '2 890 000 ₽',
      features: [
        'Анатомические сиденья с тканевой обивкой',
        'Фиксированная перегородка с отделкой',
        'Пол: транспортная фанера',
        'Освещение салона (2 плафона) и грузового отсека (2 плафона)',
        'Жидкостный отопитель 8 кВт',
        'Вентиляционно-аварийный люк',
        'Блок «ЭРА-ГЛОНАСС»'
      ]
    },
    {
      name: 'Comfort 5+1',
      price: '3 290 000 ₽',
      features: [
        'Диван-трансформер «ТАНДЕМ» 3-местный',
        '3-точечные ремни, подголовники, 4 подлокотника',
        'Фиксированная перегородка с композитом',
        'Пол: транспортная фанера',
        'Розетка 115 В двойная',
        'Подсветка входной двери',
        'Жидкостный отопитель 8 кВт'
      ],
      popular: true
    },
    {
      name: 'Pro 5+1',
      price: '3 690 000 ₽',
      features: [
        'Диван-трансформер «ТАНДЕМ» премиум',
        'Передвижная перегородка из АБС-пластика',
        'Пол: водонепроницаемое антистатическое покрытие',
        'Полное освещение салона и грузового отсека',
        'Розетка 115 В двойная',
        'Вентиляционно-аварийный люк',
        'Активный блок «ЭРА-ГЛОНАСС»'
      ]
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/a3b23c44-bf55-4a8e-9a92-4f461bbb98be/files/28140db5-74ce-49b4-be5c-db87de6dadb5.jpg',
    'https://cdn.poehali.dev/projects/a3b23c44-bf55-4a8e-9a92-4f461bbb98be/files/54b45bbc-ff4e-4c7f-a393-4aeadcedc386.jpg',
    'https://cdn.poehali.dev/projects/a3b23c44-bf55-4a8e-9a92-4f461bbb98be/files/13fa0224-9438-46bd-8c5f-458f36185276.jpg',
    'https://cdn.poehali.dev/projects/a3b23c44-bf55-4a8e-9a92-4f461bbb98be/files/7acc7d2a-faeb-4101-ba27-882efdfbf386.jpg',
    'https://cdn.poehali.dev/projects/a3b23c44-bf55-4a8e-9a92-4f461bbb98be/files/7fa771f9-d7c8-4917-98ce-8a0932bd8352.jpg',
    'https://cdn.poehali.dev/projects/a3b23c44-bf55-4a8e-9a92-4f461bbb98be/files/21fad5e6-09ed-4ec4-8b8c-2a512be7b080.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  Грузопассажирский автомобиль
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Фотон
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Тоано
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Переоборудование модели Toano в грузопассажирский вариант категории N1. Идеальное решение для вашего бизнеса — надежность, комфорт и вместительность.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Award" size={20} className="text-primary" />
                  <span>Официальный дилер МБ РУС</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span>Категория N1</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all" onClick={() => {
                  document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Оставить заявку
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => {
                  document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Характеристики
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/a3b23c44-bf55-4a8e-9a92-4f461bbb98be/files/28140db5-74ce-49b4-be5c-db87de6dadb5.jpg"
                alt="Foton Toano 2025"
                className="relative z-10 w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="specs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Технические характеристики</h2>
            <p className="text-xl text-muted-foreground">Все, что нужно для вашей работы</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {specifications.map((spec, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name={spec.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-primary">{spec.value}</h3>
                  <p className="text-muted-foreground font-medium">{spec.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">Фотон Тоано во всей красе</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`Foton Toano ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Комплектации</h2>
            <p className="text-xl text-muted-foreground">Выберите оптимальный вариант для себя</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {configurations.map((config, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  config.popular ? 'border-4 border-secondary shadow-xl scale-105' : 'border-2'
                }`}
              >
                {config.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Популярный выбор
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{config.name}</CardTitle>
                  <CardDescription className="text-4xl font-bold text-primary">
                    {config.price}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {config.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full mt-6" 
                    variant={config.popular ? "default" : "outline"}
                    onClick={() => {
                      document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Выбрать комплектацию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order-form" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-4xl mb-2">Оставьте заявку</CardTitle>
                <CardDescription className="text-lg">
                  Наши менеджеры свяжутся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Иванов"
                      className="h-12 text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      className="h-12 text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">Комментарий</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Укажите интересующую комплектацию или задайте вопрос"
                      className="min-h-32 text-base"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full text-lg h-14">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Фотон Тоано</h3>
              <p className="text-gray-400 mb-4">
                Официальный дилер грузопассажирских автомобилей Foton. Дистрибьютор МБ РУС.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Кредит</span>
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Trade-in</span>
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Лизинг</span>
                <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Сервис</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 800 302 08 36
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва и Московская область
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@foton-mbrus.ru
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Пн-Пт: 9:00 - 19:00</li>
                <li>Сб-Вс: 10:00 - 18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Фотон Тоано. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;