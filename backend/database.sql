CREATE TABLE
    users(
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `email` VARCHAR(80) UNIQUE,
        `password` LONGTEXT,
        `role` VARCHAR(10) DEFAULT 'user'
    );

CREATE TABLE
    profils(
        `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `firstname` VARCHAR(80),
        `lastname` VARCHAR(80),
        `src` VARCHAR(255),
        `localisation_id` VARCHAR(80),
        `user_id` INT,
        CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id)
    );

INSERT INTO
    users (email, password, role)
VALUES (
        "admin@admin.com",
        "admin123",
        "admin"
    );

INSERT INTO
    users (email, password)
VALUES ("user@user.com", "user123");

INSERT INTO
    profils (
        firstname,
        lastname,
        src,
        localisation_id,
        user_id
    )
VALUES ("Lucas", "LeBaka", "", 2, 1);

INSERT INTO
    profils (
        firstname,
        lastname,
        src,
        localisation_id,
        user_id
    )
VALUES ("Marta", "LePanda", "", 3, 2);

CREATE TABLE
    brands (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        brand varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    mobile_models (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        model varchar(255) NOT NULL,
        brand_id int NOT NULL,
        CONSTRAINT fk_brand_id FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    localisations (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        place varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    rams (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        property_ram INT NOT NULL,
        value_ram INT NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    storages (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        property_storage INT NOT NULL,
        value_storage INT NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    cases (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        state_case LONGTEXT NOT NULL,
        state_description_case LONGTEXT NOT NULL,
        value_case INT
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    screens (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        state_screen LONGTEXT NOT NULL,
        state_description_screen LONGTEXT NOT NULL,
        value_screen INT NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    categories (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        label varchar(255) NOT NULL,
        price_max INT NOT NULL,
        price_min INT NOT NULL,
        color varchar(25) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    phones (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        model_id INT NOT NULL,
        ram_id INT NOT NULL,
        storage_id INT NOT NULL,
        case_id INT NOT NULL,
        price INT NOT NULL,
        category_id INT NOT NULL,
        localisation_id INT NOT NULL,
        CONSTRAINT fk_model_id FOREIGN KEY (model_id) REFERENCES mobile_models(id) ON DELETE CASCADE,
        CONSTRAINT fk_ram_id FOREIGN KEY (ram_id) REFERENCES rams(id) ON DELETE CASCADE,
        CONSTRAINT fk_storage_id FOREIGN KEY (storage_id) REFERENCES storages(id) ON DELETE CASCADE,
        CONSTRAINT fk_case_id FOREIGN KEY (case_id) REFERENCES cases(id) ON DELETE CASCADE,
        CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
        CONSTRAINT fk_localisation_id FOREIGN KEY (localisation_id) REFERENCES localisations(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE
    faqs (
        id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
        question varchar(255) NOT NULL,
        answer varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO brands(brand) VALUES ('Iphone'), ('Samsung'), ('Xiaomi');

INSERT INTO
    mobile_models(model, brand_id)
VALUES ('Iphone 13', 1), ('Iphone 14', 1), ('Galaxy S20', 2), ('Galaxy S21', 2), ('MI 11', 3), ('MI 12', 3);

INSERT INTO
    localisations(place)
VALUES ('Paris'), ('Lyon'), ('Marseille'), ('Toulouse');

INSERT INTO
    rams(property_ram, value_ram)
VALUES (2, 40), (3, 45), (4, 50), (6, 55), (8, 60), (12, 65), (16, 70);

INSERT INTO
    storages(
        property_storage,
        value_storage
    )
VALUES (16, 30), (32, 40), (64, 50), (128, 60), (256, 70), (512, 80), (1000, 90);

INSERT INTO
    cases(
        state_case,
        state_description_case,
        value_case
    )
VALUES (
        "Parfait état",
        "Parfait état, aucune rayure visible",
        30
    ), (
        "Très bon état",
        "Peuvent présenter des micro-rayures à peine visibles (invisibles à 20 cm), sans fissure et/ou impact",
        20
    ), (
        "État correct",
        "Peuvent présenter des traces d’usure visibles, des rayures profondes et/ou petits impacts",
        10
    );

INSERT INTO
    screens(
        state_screen,
        state_description_screen,
        value_screen
    )
VALUES (
        "Parfait état",
        "Parfait état, aucune rayure ni marque d'usure n'est visible. L'écran est fonctionnel et ne présente aucun pixel défectueux (ex: écran fantôme, écran brûlé, pixels morts). Le tactile est opérationnel.",
        50
    ), (
        "Très bon état",
        "Peut présenter des micro-rayures à peine visibles (invisibles à 20 cm), sans fissure et/ou impact. L'écran est fonctionnel et ne présente aucun pixel défectueux (ex: écran fantôme, écran brûlé, pixels morts). Le tactile est opérationnelParfait état, aucune rayure ni marque d'usure n'est visible. L'écran est fonctionnel et ne présente aucun pixel défectueux (ex: écran fantôme, écran brûlé, pixels morts). Le tactile est opérationnel.",
        35
    ), (
        "État correct",
        "Peut présenter des traces d’usure visibles, des rayures profondes et/ou petits impacts. L'écran est fonctionnel et ne présente aucun pixel défectueux (ex: écran fantôme, écran brûlé, pixels morts). Le tactile est opérationnelne rayure ni marque d'usure n'est visible. L'écran est fonctionnel et ne présente aucun pixel défectueux (ex: écran fantôme, écran brûlé, pixels morts). Le tactile est opérationnel.",
        20
    );

INSERT INTO
    categories(
        label,
        price_min,
        price_max,
        color
    )
VALUES ("HC", 0, 90, "Blue"), ("C", 90, 165, "Vert"), ("B", 165, 255, "Jaune"), ("A", 255, 375, "Orange"), ("Premium", 375, 495, "Red");

INSERT INTO
    faqs (question, answer)
VALUES (
        "Est-il possible d'etre payé en étant bénévole sachant que je suis en 39h par semaine ?",
        "Ce que tu donnes, dieu te le rendra, mais pas en salaire."
    );

INSERT INTO
    faqs (question, answer)
VALUES (
        "Est ce du vol si je récupère un portable que personne n'achete ?",
        "Bien sur, des poursuites pourront être menées pour ça."
    );

INSERT INTO
    faqs (question, answer)
VALUES (
        "N'est ce pas honteux de vendre des téléphones de mauvaises qualités, style apple, aux gens démunis ?",
        "Complétement c'est pourquoi nous recommendons aux pauvres les autres marques."
    );

INSERT INTO
    faqs (question, answer)
VALUES (
        "Ou va l'argent suite aux ventes de portables ?",
        "Dans les poches du grand patron."
    );