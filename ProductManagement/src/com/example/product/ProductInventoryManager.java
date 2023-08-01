package com.example.product;

import java.sql.*;
import java.util.Scanner;

public class ProductInventoryManager extends ProductInventoryManagementMain{
    private Connection connection;

    public ProductInventoryManager(Connection connection) {
        this.connection = connection;
    }

    public void run() throws SQLException {
        try {
            createTableIfNotExists();

            boolean running = true;
            while (running) {
            	 System.out.println("Product Inventory Management");
               System.out.println("1. Add Product");
               System.out.println("2. View All Products");
               System.out.println("3. Update Product Quantity");
               System.out.println("4. Delete Product");
               System.out.println("5. Exit");
               System.out.print("Enter your choice: ");
               Scanner sc = new Scanner(System.in);
               int choice = sc.nextInt();

               switch (choice) {
                   case 1:
                       addProduct();
                       break;
                   case 2:
                       viewAllProducts();
                       break;
                   case 3:
                       updateProductQuantity();
                       break;
                   case 4:
                       deleteProduct();
                       break;
                   case 5:
                       running = false;
                       break;
                   default:
                       System.out.println("Invalid choice. Try again.");
               }
           
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    private void createTableIfNotExists() throws SQLException {
        String createTableQuery = "CREATE TABLE IF NOT EXISTS products (" +
                "id INT PRIMARY KEY AUTO_INCREMENT," +
                "name VARCHAR(255) NOT NULL," +
                "quantity INT NOT NULL," +
                "price DOUBLE NOT NULL" +
                ")";
        try (Statement statement = connection.createStatement()) {
            statement.execute(createTableQuery);
        }
    }

    private void addProduct() throws SQLException {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter product name: ");
        String name = sc.nextLine();

        System.out.print("Enter product quantity: ");
        int quantity = sc.nextInt();

        System.out.print("Enter product price: ");
        double price = sc.nextDouble();

        String insertQuery = "INSERT INTO products (name, quantity, price) VALUES (?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {
            preparedStatement.setString(1, name);
            preparedStatement.setInt(2, quantity);
            preparedStatement.setDouble(3, price);
            preparedStatement.executeUpdate();
            System.out.println("Product added successfully.");
        }
    }

    private void viewAllProducts() throws SQLException {
        String selectQuery = "SELECT * FROM products";
        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(selectQuery)) {
            System.out.println("Product ID | Product Name | Quantity | Price");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                int quantity = resultSet.getInt("quantity");
                double price = resultSet.getDouble("price");
                System.out.println(id + " | " + name + " | " + quantity + " | " + price);
            }
        }
    }

    private void updateProductQuantity() throws SQLException {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter product ID to update quantity: ");
        int productId = sc.nextInt();

        System.out.print("Enter new quantity: ");
        int newQuantity = sc.nextInt();

        String updateQuery = "UPDATE products SET quantity = ? WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(updateQuery)) {
            preparedStatement.setInt(1, newQuantity);
            preparedStatement.setInt(2, productId);
            int rowsUpdated = preparedStatement.executeUpdate();
            if (rowsUpdated > 0) {
                System.out.println("Product quantity updated successfully.");
            } else {
                System.out.println("Product not found with the given ID.");
            }
        }
    }

    private void deleteProduct() throws SQLException {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter product ID to delete: ");
        int productId = sc.nextInt();

        String deleteQuery = "DELETE FROM products WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(deleteQuery)) {
            preparedStatement.setInt(1, productId);
            int rowsDeleted = preparedStatement.executeUpdate();
            if (rowsDeleted > 0) {
                System.out.println("Product deleted successfully.");
            } else {
                System.out.println("Product not found with the given ID.");
            }
        }
    }
}