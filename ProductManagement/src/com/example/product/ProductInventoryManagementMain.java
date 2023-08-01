package com.example.product;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ProductInventoryManagementMain {
    public static void main(String[] args) {
        String dbUrl = "jdbc:mysql://localhost:3306/product_inventory";
        String username = "root";
        String password = "harsha*2420";

        try (Connection connection = DriverManager.getConnection(dbUrl, username, password)) {
            ProductInventoryManager manager = new ProductInventoryManager(connection);
            manager.run();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}