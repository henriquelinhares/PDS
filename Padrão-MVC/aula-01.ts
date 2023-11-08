//Padrão de desenvolvimento de sistemas. 

/*Principios de projetos.

Solid: são cinco princípios de programação orientada a objetos que facilitam o desenvolvimento de software, contribuindo com a sua manutenção e implementação. Os maiores problemas com projetos de software costumam ocorrer após a sua implementação, quando o sistema precisa ser mantido.

Single Responsibility Principle - princípio de responsabilidade única.
Open Closed/Principle - princípio aberto\fechado
Liskov Substitution Principle - princípio da substituição de Liskov
Interface Segregation Principle - princípio de segregação de interface
Dependency Inversion Principle - princípio da inversão de dependência.
*/

//Arquitetura de projetos. 

/* MVC: MVC é um padrão de design frequentemente usado no desenvolvimento de aplicativos de software para separar a lógica de negócios, a interface do usuário e o controle de fluxo em três componentes distintos. 

Model: O Model representa a camada de dados e lógica de negócios do aplicativo. Ele gerencia o acesso aos dados, processamento e manipulação de informações. Exemplo de classe: UsuarioModel. O que faz: Esta classe pode conter métodos para criar, ler, atualizar e excluir (CRUD) informações do usuário. Pode também validar dados e realizar cálculos relacionados aos usuários, como cálculo de idade, por exemplo.

View: A View é a camada de apresentação, responsável por exibir informações para o usuário. Ela não contém lógica de negócios, apenas a interface do usuário. Exemplo de classe: UsuarioView. O que faz: Esta classe lida com a formatação e exibição das informações do usuário. Ela pode conter métodos para criar formulários de entrada, mostrar perfis de usuários e apresentar dados de maneira amigável para o usuário.

Controller: O Controller atua como intermediário entre o Model e a View. Ele recebe solicitações do usuário, processa essas solicitações, interage com o Model para obter os dados necessários e, em seguida, atualiza a View apropriada. Exemplo de classe: UsuarioController.
O que faz: Esta classe pode conter métodos para lidar com ações do usuário, como criar um novo usuário (interagindo com o Model), atualizar informações do usuário (também interagindo com o Model) e direcionar as respostas para a View apropriada para exibição. 



*/